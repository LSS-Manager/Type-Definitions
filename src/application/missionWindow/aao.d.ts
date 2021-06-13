type ARRElement = JQuery<HTMLAnchorElement>;

export function aao_building_check(
    buildingIds: number[],
    vehicleCheckbox: JQuery<HTMLInputElement>
): boolean;

export function aao_check(
    arrAttributeName: string,
    arrElement: ARRElement,
    arrAttributeValue: number
): false | { max_time: number };

export function aaoNextAvailable(
    arrAttributeName: string,
    arrElement: ARRElement
): number;

export function aao(
    arrAttributeName: string,
    arrElement: ARRElement,
    arrAttributeReadableName: string,
    amount: number
): string;

export function aaoNearSelection(
    option0: Parameters<typeof aao>[0],
    option1: Parameters<typeof aao>[0],
    option2: Parameters<typeof aao>[0],
    amount: Parameters<typeof aao>[3],
    combinationIdAndName: [
        Parameters<typeof aao>[0],
        Parameters<typeof aao>[2]
    ],
    arrElement: Parameters<typeof aao>[1]
): string;

export function aaoClickHandler(arrElement: ARRElement): boolean;

export function vehicleGroupClickHandler(
    vehicleGroupElement: ARRElement
): boolean;
