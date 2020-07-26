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
