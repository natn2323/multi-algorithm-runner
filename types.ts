export interface MenuItem {
    /**
     * Displayed text for menu item.
     */
    description?: string;

    /**
     * Text for accessibility and screen readers.
     */
    label?: string;

    /**
     * Link to use for Angular's RouterLink.
     */
    linkToRouter?: string;

    /**
     * Child menu items belonging to this menu item.
     */
    subItems?: MenuItem[];
}

export interface UserInputCell {
    /**
     * The i-th index. Represents the row index in a table.
     */
    i: number;

    /**
     * The j-th index. Represents the column index in a table.
     */
    j: number;

    /**
     * The value at the (i,j)-th index.
     */
    value: string | number;
}