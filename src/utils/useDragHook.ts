interface DragConfig {
	el: string; // 元素选择器
	adsorb: boolean; // 是否启用吸附效果
}

export class Drag {
	private element: HTMLElement | null;
	private startX: number = 0;
	private startY: number = 0;
	private isDragging: boolean = false;
	private adsorb: boolean;

	constructor(config: DragConfig) {
		this.element = document.querySelector(config.el);
		this.adsorb = config.adsorb;

		if (this.element) {
			this.element.addEventListener('mousedown', this.onMouseDown.bind(this));
			document.addEventListener('mousemove', this.onMouseMove.bind(this), { capture: true });
			document.addEventListener('mouseup', this.onMouseUp.bind(this), { capture: true });
		} else {
			console.error(`Element with selector '${config.el}' not found.`);
		}
	}

	private onMouseDown(event: MouseEvent) {
		if (this.element && event.target === this.element) {
			event.preventDefault();
			this.startX = event.clientX - this.element.offsetLeft;
			this.startY = event.clientY - this.element.offsetTop;
			this.isDragging = true;
		}
	}

	private onMouseMove(event: MouseEvent) {
		if (this.isDragging) {
			event.preventDefault();
			const posX = event.clientX - this.startX;
			const posY = event.clientY - this.startY;

			// Ensure element stays within screen boundaries
			const screenWidth = window.innerWidth;
			const screenHeight = window.innerHeight;
			const elemRect = this.element!.getBoundingClientRect();

			// Calculate boundaries
			const minX = 0;
			const minY = 0;
			const maxX = screenWidth - elemRect.width;
			const maxY = screenHeight - elemRect.height;

			// Apply boundaries
			let newPosX = Math.min(Math.max(posX, minX), maxX);
			let newPosY = Math.min(Math.max(posY, minY), maxY);

			this.element!.style.left = newPosX + 'px';
			this.element!.style.top = newPosY + 'px';
		}
	}

	private onMouseUp(event: MouseEvent) {
		if (this.isDragging) {
			event.preventDefault();
			this.isDragging = false;

			// Apply adsorption effect if enabled
			if (this.adsorb) {
				const screenWidth = window.innerWidth;
				const screenHeight = window.innerHeight;
				const elemRect = this.element!.getBoundingClientRect();

				let newX = elemRect.left;
				let newY = elemRect.top;

				// Calculate distances to screen edges
				const distanceToLeft = elemRect.left;
				const distanceToRight = screenWidth - (elemRect.left + elemRect.width);
				const distanceToTop = elemRect.top;
				const distanceToBottom = screenHeight - (elemRect.top + elemRect.height);

				// Find the nearest edge
				const minDistance = Math.min(distanceToLeft, distanceToRight, distanceToTop, distanceToBottom);

				if (minDistance === distanceToLeft) {
					newX = 0;
				} else if (minDistance === distanceToRight) {
					newX = screenWidth - elemRect.width;
				}

				if (minDistance === distanceToTop) {
					newY = 0;
				} else if (minDistance === distanceToBottom) {
					newY = screenHeight - elemRect.height;
				}

				// Apply snapping effect
				this.element!.style.left = newX + 'px';
				this.element!.style.top = newY + 'px';
			}
		}
	}
}
