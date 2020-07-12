/* eslint-disable no-underscore-dangle */
import Chart from 'chart.js';

const maxRadius = 20;
const getRadius = (height, width) => {
    const min = Math.min(height, width);
    if (maxRadius > min / 2) {
        return min / 2;
    }
    return maxRadius;
};

function drawRectVertical(context, view) {
    const { x, y, base, width } = view;
    const left = x - width / 2;
    const height = base - y;
    const radius = getRadius(height, width);
    context.moveTo(left + radius, y);
    context.lineTo(left + width - radius, y);
    context.quadraticCurveTo(left + width, y, left + width, y + radius);
    context.lineTo(left + width, base);
    context.lineTo(left, base);
    context.lineTo(left, y + radius);
    context.quadraticCurveTo(left, y, left + radius, y);
}

function drawRectHorizontal(context, view) {
    const { x, y, base, height } = view;
    const width = x;
    const top = y - height / 2;
    const radius = getRadius(height, width);
    context.moveTo(x - radius, top);
    context.quadraticCurveTo(x, top, x, top + radius);
    context.lineTo(x, top + height - radius);
    context.quadraticCurveTo(x, top + height, x - radius, top + height);
    context.lineTo(base, top + height);
    context.lineTo(base, top);
    context.lineTo(top - radius, top);
}

Chart.elements.Rectangle.prototype.draw = function drawRect() {
    const context = this._chart.ctx;
    const view = this._view;
    context.beginPath();
    context.fillStyle = view.backgroundColor;
    context.strokeStyle = view.borderColor;
    if (view.horizontal) {
        drawRectHorizontal(context, view);
    } else {
        drawRectVertical(context, view);
    }
    context.fill();
};

export default Chart;
