PIZZAS = (
    {
        "name": "Cheese Pizza",
        "cost": 5.00
    },
    {
        "name": "Pepperoni Pizza",
        "cost": 7.50
    },
)

my_pizzas = []

def display_invalid_option(menu_selection):
    if menu_selection.isdigit():
        print("\n{} is an invalid option, please try again".format(menu_selection))
    else:
        print("\n{} is not a number, please enter a number from the menu above".format(menu_selection))

def is_valid_pizza(pizza_selection, pizzas):
    return pizza_selection.isdigit() and int(pizza_selection)-1 < len(pizzas)

def display_pizzas(pizzas):
    if len(pizzas) > 0:
        for index, pizza in enumerate(pizzas):
            print("{}: {}  cost: ${}".format(index+1, pizza["name"], pizza["cost"]))
    else:
        print("No pizzas found.")

def display_total_cost(pizzas):
    total_cost = sum([pizza["cost"] for pizza in pizzas])
    print("===========")
    print("TOTAL COST: ${}".format(total_cost))

def add_to_order():
    """
    Prompts for adding pizza to the order
    """

    while True:
        print("\n")
        display_pizzas(PIZZAS)
        print("0: Go back")

        pizza_selection = input("\nWhich pizza would you like to order? ")

        if pizza_selection == "0":
            break
        elif is_valid_pizza(pizza_selection, PIZZAS):
            my_pizzas.append(PIZZAS[int(pizza_selection) - 1])
        else:
            display_invalid_option(pizza_selection)

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
            add_to_order()
        elif menu_selection == "2":
            pass
        elif menu_selection == "3":
            display_pizzas(my_pizzas)
            display_total_cost(my_pizzas)
            print("\n\n")
        elif menu_selection == "4":
            pass
        else:
            display_invalid_option(menu_selection)


if __name__ == '__main__':
    main()
