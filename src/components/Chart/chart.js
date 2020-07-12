/* eslint-disable no-underscore-dangle */
import Chart from 'chart.js';

Chart.elements.Rectangle.prototype.draw = function Draw() {
    const context = this._chart.ctx;
    const view = this._view;
    context.beginPath();
    context.fillStyle = view.backgroundColor;
    context.strokeStyle = view.borderColor;
    const { x, y, width, base } = view;
    const left = x - width / 2;
    const height = base - y;
    let radius = 20;
    if (radius > height / 2) {
        radius = height / 2;
    }
    if (radius > width / 2) {
        radius = width / 2;
    }
    context.moveTo(left + radius, y);
    context.lineTo(left + width - radius, y);
    context.quadraticCurveTo(left + width, y, left + width, y + radius);
    context.lineTo(left + width, base);
    context.lineTo(left, base);
    context.lineTo(left, y + radius);
    context.quadraticCurveTo(left, y, left + radius, y);
    context.fill();
};

export default Chart;
