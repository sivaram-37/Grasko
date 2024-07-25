class Product {
  name = "Default";
  image;
  price;
  description;
  constructor(name, image, price, desc) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = desc;
  }
}

class ElementAttribute {
  constructor(attName, attValue) {
    this.name = attName;
    this.value = attValue;
  }
}

class Component {
  constructor(renderhookId, toRender = true) {
    this.hookId = renderhookId;
    if (toRender) {
      this.render();
    }
  }
  createRootElement(tag, cssClass, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClass) {
      rootElement.className = cssClass;
    }
    if (attributes && attributes.length > 0) {
      for (const att of attributes) {
        rootElement.setAttribute(att.name, att.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ProductItem extends Component {
  constructor(product, renderhookId) {
    super(renderhookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
    prodEl.innerHTML = `
        <div>
          <img src=${this.product.image} alt=${this.product.name}/>
          <div class="product-item__content">
            <h2>${this.product.name}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to cart</button>
          </div>
        </div>
      `;
    const addToCartBtn = prodEl.querySelector("button");
    addToCartBtn.addEventListener("click", this.addToCart.bind(this));
  }
}

class ShoppingCart extends Component {
  items = [];

  constructor(renderhookId) {
    super(renderhookId);
  }

  set cartItem(val) {
    this.items = val;
    this.totalOutput.innerHTML = `<h2>Total:\$${this.totalAmount}</h2>`;
  }

  get totalAmount() {
    return this.items.reduce((preVal, curItem) => preVal + curItem.price, 0);
  }

  addProduct(product) {
    const updatedItem = [...this.items];
    updatedItem.push(product);
    this.cartItem = updatedItem;
  }

  orderProduct() {
    console.log("Ordering...");
    console.log(this.items);
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.className = "cart";
    cartEl.innerHTML = `
      <h2>Total:\$${0}</h2>
      <button>Order Now</button>
    `;
    const orderBtn = cartEl.querySelector("button");
    orderBtn.addEventListener("click", () => this.orderProduct());
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductList extends Component {
  products = [];
  constructor(renderhookId) {
    super(renderhookId);
    this.fetchProduct();
  }

  fetchProduct() {
    this.products = [
      new Product("Pillow", "images/pillow.jpg", 29.99, "Soft and comfortable"),
      new Product("Carpet", "images/carpet.jpg", 59.99, "A long lasting carpet."),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, "prod-list");
    }
  }

  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop {
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoppingCart("app");
    new ProductList("app");
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
