export interface MenuItem {
    description?: string;
    label?: string;
    linkToRouter?: string;
    subItems?: MenuItem[];
}
