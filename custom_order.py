def get_menu_selection(menu_items):
    """
    Display a menu and return the user's selection
    """
    print("\n")
    for menu_item in menu_items:
        print(menu_item)

    return input("\nPlease select an option from above. ")


class Cart():
    MENU_ITEMS = (
        "1: Add Pizza",
        "2: Display Pizzas",
        "3: Remove Pizza",
        "4: Place order",
        "0: Exit",
    )

    def __init__(self):
        self.pizzas = []

    def display_menu(self):
        while True:
            menu_selection = get_menu_selection(self.MENU_ITEMS)

            if menu_selection == "0":
                break



def main():
    """
    Main loop
    """
    cart = Cart()
    cart.display_menu()

if __name__ == '__main__':
    main()