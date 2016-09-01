from sys import argv

import yaml

from orders import Cart

def main():
    """
    Main loop
    """
    cart = Cart()

    try:
        filename = argv[1]
        with open(filename, 'r') as premade_file:
            premade_pizzas = yaml.load(premade_file)
            cart.set_available_pizzas(premade_pizzas)
    except IndexError:
        pass
    except FileNotFoundError:
        print("WARNING: Could not find premade file, no premade pizzas were loaded")

    cart.display_menu()

if __name__ == '__main__':
    main()