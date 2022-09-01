const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Treats' },
    { name: 'Toys' },
    { name: 'Collars' },
    { name: 'Bowls' },
    { name: 'Beds'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Royal Canin® Small Breed Adult Dry Dog Food',
      description:
        'Royal Canin Small Adult dry dog food is formulated to meet the unique nutritional needs of small breed adult dogs, as they actually require higher levels of calories per pound of body weight than large dogs. L-carnitine helps metabolize fat to help your dog maintain a healthy weight. Ideal levels of EPA and DHA support healthy skin and a beautiful, shiny coat. Plus, enhanced palatability helps satisfy even the pickiest eaters. ',
      image: 'royal-canin.jpg',
      category: categories[0]._id,
      price: 49.99,
      quantity: 300
    },
    {
      name: 'Purina® Friskies® All Life Stages Cat Wet Food',
      description:
        "Give your cat an entree so good she'll think it's people food with Purina Friskies Pate Country Style Dinner wet cat food. The savory chicken flavor brings classic yummy goodness to her dish, and the smooth pate pleases her palate from her first bite to her very last nibble. The aroma of this Purina Friskies pate canned cat food lets her know that something truly delicious awaits her at mealtime.",
      image: 'friskies.jpg',
      category: categories[0]._id,
      price: 1.00,
      quantity: 750
    },
    {
      name: 'Greenies™ Adult Regular Dog Dental Treats',
      category: categories[1]._id,
      description:
        "One GREENIES Original Dental Treat a day is all it takes for clean teeth, fresh breath, and a happy dog. Your dog can't wait to sink their teeth into these delicious, original-flavor dental dog chews because they feature a delightfully chewy texture that fights plaque and tartar. Irresistibly tasty and incredibly powerful, GREENIES Treats for Dogs are vet recommended for at-home dental care.",
      image: 'greenies.jpg',
      price: 15.99,
      quantity: 54
    },
    {
      name: 'Pork Chomps™ Rawhide Free Bone Dog Treat',
      category: categories[1]._id,
      description:
        'Let your dog satisfy his urge to chew with this Pork Chomps Roasted Pressed Bone Dog Chew. This rawhide-free treat is made of oven-roasted pork skin, tastes delicious and is easy to digest. High in protein, it is also stain-free and offers hours and hours of chewing fun.',
      image: 'porkchomps.jpg',
      price: 3.79,
      quantity: 600
    },
    {
      name: 'Whisker City® Mouse Teaser Cat Toy',
      category: categories[2]._id,
      description:
        'Engage in fun, interactive play with your kitty and keep her active and engaged with this Whisker City Green Mouse with Ribbon Tail Teaser Cat Toy. Teasers give you the chance to interact with your cat and satisfy their natural instinct to hunt. Move the wand, dangle the toy and keep your cat active and entertained until one of you finally wears out.',
      image: 'whisker.jpg',
      price: 2.07,
      quantity: 287
    },
    {
      name: 'KONG® Classic Dog Toy',
      category: categories[2]._id,
      description:
        "The KONG Classic is the gold standard of dog toys, and has become the staple for dogs around the world for over forty years. Offering enrichment by helping satisfy a dog's instinctual needs, the KONG Classic's unique natural red rubber formula is ultra-durable with an erratic bounce that is ideal for dogs that like to chew while also fulfilling a dog's need to play.",
      image: 'kong.jpg',
      price: 21.99,
      quantity: 1000
    },
    {
      name: 'Top Paw® Signature Dog Collar',
      category: categories[3]._id,
      description:
        'Provide your dog with a collar that is strong, comfortable and stylish with this Top Paw Signature Adjustable Collar.',
      image: 'toppaw.jpg',
      price: 11.99,
      quantity: 670
    },
    {
      name: 'Seresto® Flea & Tick Cat Collar',
      category: categories[3]._id,
      description:
        "The Bayer Seresto Flea & Tick Collar for Cats 10 weeks of age and older provides continuous 8-month flea and tick protection. Unlike some oral flea and tick prevention for cats, which require a bite, the Seresto collar repels fleas and ticks and kills through contact so they don't have to bite your cat to die. Frontline flea and tick treatment does not repel (based on label claims).",
      image: 'seresto.jpg',
      price: 62.99,
      quantity: 100
    },
    {
      name: 'Petmate® Gamma2 NANO Automated Pet Feeder',
      category: categories[4]._id,
      description: "NANO by Gamma2 is the only automated pet feeder that dispenses the right amount of pet food, every time. No other automated feeder is this intelligently designed for performance or ease of use. Out of the box, the Nano is pre-programmed to serve 2 cups, 2 times a day; however, pet parents are able to fully customize their pet's meal schedule with up to 6 mealtimes and meal sizes to dispense daily.",
      image: 'petmate.jpg',
      price: 93.99,
      quantity: 100
    },
    {
      name: 'Catit® 2.0 Flower Cat Drinking Fountain',
      category: categories[4]._id,
      description:
        'The Catit Flower Fountain has a fresh, unique design that allows up to 3 different water flow settings to appeal to picky drinkers! When plugged in without accessories, the Flower Fountain provides a gently flowing water surface. Inserting the flower accessory creates long, faucet-like streams of water.',
      image: 'catit.jpg',
      price: 27.99,
      quantity: 400
    },
    {
      name: 'Whisker City® Chevron Hexagon Cuddler Cat Bed',
      category: categories[5]._id,
      description:
        'This Whisker City Grey Chevron Hexagon Cuddler Cat Bed is the perfect place for your kitty to find true rest and relaxation. This soft donut-shaped bed features a stylish chevron hexagon design, and offers your cat optimal comfort whenever she lays her head down to rest.',
      image: 'bed.jpg',
      price: 21.24,
      quantity: 105
    },
    {
      name: 'Value Beds Orange Tribal Cuddler Dog Bed',
      category: categories[5]._id,
      description:
        'Your dog will love the time he spends relaxing in this Value Beds Orange Tribal Cuddler Dog Bed. This cuddler-shaped bed features soft features a colorful tribal design, and is machine washable for your convenience when it comes time to clean it. Most importantly, it offers your pup optimal comfort when he lays his head down to rest.',
      image: 'value.jpg',
      price: 11.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});