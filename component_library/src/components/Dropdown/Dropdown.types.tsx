export interface DropdownOption{
    label: string;
    value: string;
}

export interface DropdownProps{
    items: DropdownOption[];
    disabled?: boolean;
}