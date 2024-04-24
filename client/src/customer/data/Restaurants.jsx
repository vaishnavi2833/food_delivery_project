const restaurants = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Tasty Delights',
      rating: '4.3',
      city: 'London',
      description: 'Tasty Delights offers a diverse menu with mouth-watering dishes from around the world. From savory steaks to refreshing salads, there\'s something for every palate.'
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Sushi Haven',
      rating: '4.7',
      city: 'Tokyo',
      description: 'Sushi Haven is a haven for sushi lovers, serving fresh and expertly crafted sushi rolls, sashimi, and Japanese specialties in a serene setting.'
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'La Pizzeria',
      rating: '4.5',
      city: 'Rome',
      description: 'La Pizzeria offers authentic Italian pizzas with crispy crusts, flavorful toppings, and a cozy atmosphere that transports you to the heart of Italy.'
    },
    {
      id: 4,
      imageUrl: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Flavors of India',
      rating: '4.6',
      city: 'Mumbai',
      description: 'Flavors of India presents a rich tapestry of Indian cuisine, from aromatic curries to tandoori delights, showcasing the country\'s diverse culinary heritage.'
    },
    {
      id: 5,
      imageUrl: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Gourmet Garden',
      rating: '4.4',
      city: 'Paris',
      description: 'Gourmet Garden offers a refined dining experience with French delicacies, exquisite wines, and impeccable service in the heart of Paris.'
    },
    {
      id: 6,
      imageUrl: 'https://images.pexels.com/photos/10152893/pexels-photo-10152893.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Burger Barn',
      rating: '4.2',
      city: 'New York',
      description: 'Burger Barn serves up juicy burgers, crispy fries, and indulgent milkshakes, satisfying cravings for classic American comfort food.'
    },
    {
      id: 7,
      imageUrl: 'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Seafood Sensations',
      rating: '4.8',
      city: 'Sydney',
      description: 'Seafood Sensations brings the bounty of the ocean to your table, with fresh catches, seafood platters, and ocean-inspired dishes.'
    },
    {
      id: 8,
      imageUrl: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Mediterranean Flavors',
      rating: '4.3',
      city: 'Athens',
      description: 'Mediterranean Flavors offers a taste of the Mediterranean with grilled meats, fresh salads, and flavorful dips, all infused with Mediterranean herbs and spices.'
    },
    {
      id: 9,
      imageUrl: 'https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Vegetarian Delights',
      rating: '4.6',
      city: 'San Francisco',
      description: 'Vegetarian Delights serves creative and satisfying vegetarian dishes, showcasing the versatility of plant-based ingredients in vibrant and flavorful ways.'
    },
    {
      id: 10,
      imageUrl: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Steakhouse Supreme',
      rating: '4.9',
      city: 'Chicago',
      description: 'Steakhouse Supreme is a paradise for steak aficionados, offering prime cuts, aged steaks, and indulgent steakhouse classics in an elegant setting.'
    },
    {
      id: 11,
      imageUrl: 'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Asian Fusion',
      rating: '4.4',
      city: 'Singapore',
      description: 'Asian Fusion blends the best flavors of Asia, from spicy Thai curries to delicate sushi rolls, creating a harmonious culinary experience.'
    },
    {
      id: 12,
      imageUrl: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'BBQ Grill House',
      rating: '4.7',
      city: 'Dallas',
      description: 'BBQ Grill House specializes in smoky BBQ flavors, tender ribs, grilled meats, and hearty sides, perfect for a satisfying and savory feast.'
    },
    {
      id: 13,
      imageUrl: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Café Serenity',
      rating: '4.5',
      city: 'Amsterdam',
      description: 'Café Serenity offers a tranquil escape with aromatic coffees, delectable pastries, and cozy corners, ideal for relaxing and unwinding.'
    },
    {
      id: 14,
      imageUrl: 'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Mexican Fiesta',
      rating: '4.2',
      city: 'Mexico City',
      description: 'Mexican Fiesta serves up bold and flavorful Mexican dishes, from spicy tacos to zesty guacamole, accompanied by refreshing margaritas.'
    },
    {
      id: 15,
      imageUrl: 'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Rooftop Lounge',
      rating: '4.8',
      city: 'Dubai',
      description: 'Rooftop Lounge offers breathtaking views of the city skyline along with creative cocktails, gourmet bites, and a chic rooftop ambiance.'
    },
    {
      id: 16,
      imageUrl: 'https://images.pexels.com/photos/9330580/pexels-photo-9330580.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Coastal Eats',
      rating: '4.4',
      city: 'Miami',
      description: 'Coastal Eats brings coastal flavors to your plate, with fresh seafood, beachside favorites, and tropical cocktails that capture the essence of the coast.'
    },
    {
      id: 17,
      imageUrl: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Fusion Frenzy',
      rating: '4.6',
      city: 'Seoul',
      description: 'Fusion Frenzy blends culinary traditions from around the world, creating innovative and exciting fusion dishes that tantalize your taste buds.'
    },
    {
      id: 18,
      imageUrl: 'https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Pasta Paradise',
      rating: '4.3',
      city: 'Milan',
      description: 'Pasta Paradise celebrates the art of pasta-making with fresh noodles, rich sauces, and authentic Italian recipes that transport you to Italy\'s culinary heart.'
    },
]

export default restaurants
  