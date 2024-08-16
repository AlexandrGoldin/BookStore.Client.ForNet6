import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Загружается...</div>
    ) : (
      <div className="filter">
        <div className="filter-result">
          Книг: {this.props.filteredProducts.length}
        </div>
        <div className="filter-sort">
          По цене{" "}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="Не выбрано">Не выбрано</option>
            <option value="дешевле">Дешевле</option>
            <option value="дороже">Дороже</option>
          </select>
        </div>
        <div className="filter-genre">
          По жанру{" "}
          <select
            value={this.props.genre}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">Все жанры</option>
            <option value="Детектив">Детектив</option>
            <option value="Фантастика">Фантастика</option>
            <option value="Современная проза">Современная проза</option>
            <option value="Медицина и здоровье">Медицина и здоровье</option>
            <option value="Личная эффективность">Личная эффективность</option>
            <option value="Фэнтези">Фэнтези</option>
          </select>
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    genre: state.products.genre,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);
