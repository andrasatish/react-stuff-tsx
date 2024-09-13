export interface StatesList {
    label: string;
    value: string;
}

export interface GenderList {
    label: string;
    value: string;
}

export interface PlaceType {
    label: string;
    value: string;
}

export interface TouristListData {
    name: string;
    location: string,
    age: number | string, 
    state: string,
    gender: string,
    placeType: string[],
    id: string
}

export interface ModalActionButtons {
    actionButtonValue: string | undefined;
    action: string;
}

export interface AlertConfigData {
    title: string,
    alertOpen: boolean
}

