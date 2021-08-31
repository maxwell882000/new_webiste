export const Axis = {
    HORIZONTAL: "h",
    VERTICAL: "v"
}

export class HelperScrollClass {
    constructor(style, selected) {
        this.common_list = [];
        this.style = style;
        this.selected = selected;
    }

    addCommonStyling() {
        this.common_list.push(this.selectAppropriateStyle(this.selected, this.style.active, this.style.inactive));
        this.common_list.push(this.style.common);
    }

    addStylingWhichDependsOnAxis(axis) {
        return this.selectAppropriateAxes(axis, this.common_list,
            [this.selectAppropriateStyle(
                this.selected, this.style.activeHorizontal,
                this.style.inactiveHorizontal), this.style.horizontal], // choose horizontal
            [this.selectAppropriateStyle(
                this.selected, this.style.activeVertical,
                this.style.inactiveVertical), this.style.vertical] // or vertical styling
        );
    }

    selectAppropriateStyle(select, active, inactive) {
        return select ? active : inactive;
    }

    selectAppropriateAxes(axis, list = [], horizontal, vertical) {
        const choosen = axis === Axis.HORIZONTAL ? horizontal : vertical;
        return list.concat(choosen);
    }
}