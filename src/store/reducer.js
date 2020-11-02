// src/store/reducer.js
const initialState = {
  user: {
    name: "Sjouke",
    favorites: [161235, 357311],
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      url:
        "https://www.okokorecepten.nl/i/recepten/kookboeken/2017/pizzabijbel/pizza-bianca-gorgonzola-rozemarijn-500.jpg",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
    },
    {
      id: 67283,
      name: "Neapolitan pizza",
      url:
        "https://kookidee.nl/wp-content/uploads/2018/11/pizza-margherita.jpg",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      url:
        "https://img.static-rmg.be/a/food/image/q75/w640/h400/1077806/pizza.jpg",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            url: action.payload.url,
            description: action.payload.description,
            bought: 0,
          },
        ],
      };
    }
    case "TOGGLE_FAVORITE_PIZZA": {
      if (state.user.favorites.includes(action.payload)) {
        const removeFavorite = state.user.favorites.filter((favorite) => {
          return favorite !== action.payload;
        });
        return {
          ...state,
          user: {
            ...state.user,
            favorites: removeFavorite,
          },
        };
      }

      return {
        ...state,
        user: {
          ...state.user,
          favorites: [...state.user.favorites, action.payload],
        },
      };
    }
    default: {
      return state;
    }
  }
}
