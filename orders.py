import os
from datetime import datetime

import yaml

from menus import get_menu_selection, display_selection_error
from pizzas import Pizza, PremadePizza

class Cart():
    MENU_ITEMS = (
        "1: Select Premade Pizza",
        "2: Add Pizza",
        "3: Display Pizzas",
        "4: Remove Pizza",
        "5: Place order",
        "0: Exit",
    )

    def __init__(self):
        self.pizzas = []
        self.available_pizzas = []

    def get_total_price(self):
        return sum(pizza.get_total_price() for pizza in self.pizzas)

    def add_pizza(self):
        pizza = Pizza.make_pizza()
        if pizza is not None:
            self.pizzas.append(pizza)
            print("\n Pizza added to cart!")

    def display_pizzas(self):
        if len(self.pizzas) == 0:
            print("There are no pizzas in the cart")
        else:
            for index, pizza in enumerate(self.pizzas):
                print("\n{index}: {pizza}"
                    .format(index=index+1, pizza=pizza))
                pizza.display_toppings()
            print("")
            print("*"*40)
            print("SHOPPING CART TOTAL: ${:,.2f}".format(self.get_total_price()))

    def remove_pizzas(self):
        while True:
            self.display_pizzas()
            print("0: Cancel")
            menu_selection = input("\nPlease select a pizza to remove. ")

            if menu_selection == "0":
                break
            elif (menu_selection.isdigit() 
                and int(menu_selection) - 1 < len(self.pizzas)):

                pizza = self.pizzas[int(menu_selection) - 1]
                self.pizzas.remove(pizza)
                print("\nPizza {} removed from the cart!".format(menu_selection))
            else:
                display_selection_error(menu_selection)

    def save_order(self):
        if not os.path.exists('./orders'):
            os.makedirs('./orders')

        order = []
        for pizza in self.pizzas:
            pizza_dict = pizza.__dict__
            order.append(pizza_dict)
            toppings = []

            for topping in pizza.toppings:
                toppings.append(topping.__dict__)

            pizza_dict["toppings"] = toppings
        
        filepath = "./orders/{}.yml".format(datetime.now())

        with open(filepath, 'w') as order_file:
            yaml.dump(order, order_file)

    def set_available_pizzas(self, pizzas_list):
        for pizza_dict in pizzas_list:
            pizza = PremadePizza.load_from_dict(pizza_dict)
            self.available_pizzas.append(pizza)

    def select_premade_pizza(self):
        menu_items = [
            "{}: {}".format(index+1, pizza)
            for index, pizza in enumerate(self.available_pizzas)
        ]
        menu_items.append("0: Cancel")
        
        while True:
            menu_selection = get_menu_selection(menu_items)

            if menu_selection == "0":
                break
            elif (menu_selection.isdigit()
                and int(menu_selection) -1 < len(self.available_pizzas)):

                pizza = self.available_pizzas[int(menu_selection) - 1]
                pizza = Pizza.make_pizza(pizza)
                if pizza is not None:
                    self.pizzas.append(pizza)
                    print("\n Pizza added to the cart!")
                break
            else:
                display_selection_error(menu_selection)

    def display_menu(self):
        while True:
            menu_selection = get_menu_selection(self.MENU_ITEMS)

            if menu_selection == "0":
                break
            elif menu_selection == "1":
                if len(self.available_pizzas) > 0:
                    self.select_premade_pizza()
                else:
                    print("\n There are no premade pizzas to select")
            elif menu_selection == "2":
                self.add_pizza()
            elif menu_selection == "3":
                self.display_pizzas()
            elif menu_selection == "4":
                self.remove_pizzas()
            elif menu_selection == "5":
                print("\n Your pizzas are on their way")
                self.save_order()
                self.pizzas = []
            else:
                display_selection_error(menu_selection)