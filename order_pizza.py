def display_invalid_option(menu_selection):
    if menu_selection.isdigit():
        print("\n{} is an invalid option, please try again".format(menu_selection))
    else:
        print("\n{} is not a number, please enter a number from the menu above".format(menu_selection))


def main():
    MENU_ITEMS = (
        "1: Add Pizza to Order",
        "2: Remove Pizza from Order",
        "3: Display Order",
        "4: Order Pizza",
        "0: Exit",
    )

    while True:
        for menu_item in MENU_ITEMS:
            print(menu_item)

        menu_selection = input("\nPlease select an option from above? ")

        if menu_selection == "0":
            break
        elif menu_selection == "1":
            pass
        elif menu_selection == "2":
            pass
        elif menu_selection == "3":
            pass
        elif menu_selection == "4":
            pass
        else:
            display_invalid_option(menu_selection)



main()