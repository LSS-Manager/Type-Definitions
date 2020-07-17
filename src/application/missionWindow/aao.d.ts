export function aao_building_check(
    buildingIds: number[],
    vehicleCheckbox: JQuery<HTMLInputElement>
): boolean;

export function aao_check(
    arrAttributeName: string,
    arrElement: HTMLAnchorElement,
    arrAttributeValue: number
): false | { max_time: number };

export function aaoNextAvailable(
    arrAttributeName: string,
    arrElement: HTMLAnchorElement
): number;

export function aao(
    arrAttributeName: string,
    arrElement: HTMLAnchorElement,
    arrAttributeReadableName: string,
    amount: number
): string;
