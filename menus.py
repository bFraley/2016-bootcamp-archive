def get_menu_selection(menu_items):
    """
    Display a menu and return the user's selection
    """
    print("\n")
    for menu_item in menu_items:
        print(menu_item)

    return input("\nPlease select an option from above. ")

def display_selection_error(menu_selection):
    if menu_selection.isdigit():
        print("\n{} is an invalid option, please try again"
            .format(menu_selection))
    else:
        print("\n{} is not a number. Please select a number from the options above."
            .format(menu_selection))
