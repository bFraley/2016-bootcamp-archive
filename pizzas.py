from menus import get_menu_selection, display_selection_error
from toppings import Topping

class Pizza():
    MENU_ITEMS = (
        "1: Add Toppings",
        "2: Display Toppings",
        "3: Remove Toppings",
        "4: Add Pizza to Cart",
        "0: Cancel",
    )

    AVAILABLE_TOPPINGS = (
        Topping("Cheese"),
        Topping("Pepperoni", 2.00),
        Topping(name="Sausage", price=2.50),
    )

    def __init__(self, base_price=5.00):
        self.toppings = []
        self.base_price = base_price

    @classmethod
    def make_pizza(cls):
        """
        Return a new pizza based off what is entered by the user
        """

        # cls == Pizza
        pizza = cls()

        while True:
            menu_selection = get_menu_selection(pizza.MENU_ITEMS)

            if menu_selection == "0":
                return None
            elif menu_selection == "1":
                pizza.add_toppings()
            elif menu_selection == "2":
                pizza.display_toppings()
            elif menu_selection == "3":
                pizza.remove_toppings()
            elif menu_selection == "4":
                return pizza
            else:
                display_selection_error(menu_selection)

        return None

    def get_total_price(self):
        return self.base_price + sum(topping.price for topping in self.toppings)

    def get_toppings_menu_list(self, toppings):
        """
        Return a list of format menu items based off the toppings
        """
        menu_items = [
            "{}: {}".format(index + 1, topping)
            for index, topping in enumerate(toppings)
        ]
        menu_items.append("0: Exit")

        return menu_items

    def is_valid_topping(self, selection, toppings=AVAILABLE_TOPPINGS):
        """
        Checks to make sure a selection is valid
        """

        return (selection.isdigit()
            and int(selection) - 1 < len(toppings))

    def add_toppings(self):
        """
        UI for a user to add a topping to the current pizza
        """

        while True:
            menu_selection = get_menu_selection(
                self.get_toppings_menu_list(self.AVAILABLE_TOPPINGS))


            if menu_selection == "0":
                break
            elif self.is_valid_topping(menu_selection):
                topping = self.AVAILABLE_TOPPINGS[int(menu_selection) - 1]
                self.toppings.append(topping)
                print("\n{} added to the pizza!".format(topping))
            else:
                display_selection_error(menu_selection)

    def display_toppings(self):
        if len(self.toppings) == 0:
            print("No toppings")
        else:
            for topping in self.toppings:
                print(topping)

        print("="*10)
        print("TOTAL PRICE: ${:,.2f}".format(self.get_total_price()))

    def remove_toppings(self):
        while True:
            menu_selection = get_menu_selection(
                self.get_toppings_menu_list(self.toppings))

            if menu_selection == "0":
                break
            elif self.is_valid_topping(menu_selection, self.toppings):
                topping = self.toppings[int(menu_selection) - 1]
                self.toppings.remove(topping)
                print("\n{} removed from the pizza!".format(topping))
            else:
                display_selection_error(menu_selection)

class PremadePizza(Pizza):
    def __init__(self, name="Premade", base_price=6.00,
        toppings=None):
        
        super().__init__(base_price=base_price)
        self.name = name
        self.toppings = toppings or []

    @classmethod
    def load_from_dict(cls, pizza_dict):
        # cls() == PremadePizza()
        toppings = []
        for topping_dict in pizza_dict["toppings"]:
            topping = Topping(name=topping_dict["name"],
                price=topping_dict["price"])
            toppings.append(topping)

        pizza = cls(name=pizza_dict["name"], toppings=toppings)
        return pizza

    def __str__(self):
        return "{} - ({} toppings) ${:,.2f}".format(self.name,
            len(self.toppings), self.get_total_price())