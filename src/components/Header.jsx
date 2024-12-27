import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { FaHome, FaCartPlus } from "react-icons/fa";
import { useState } from "react";

const Header = ({ products }) => {
  console.log(products);
  const { totalUniqueItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredProducts(products); // Reset to all products if search input is empty
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered.length > 0 ? filtered : []);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-danger text-light">
        <Container>
          <NavLink className="nav-link text-light" to="/">
            <h3> Flipkart</h3>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link text-light" to="/">
                <FaHome /> Home
              </NavLink>
              <Nav.Link href="#about" className="text-light">
                About
              </Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#web-development">
                  Web Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#seo">SEO</NavDropdown.Item>
                <NavDropdown.Item href="#digital-marketing">
                  Digital Marketing
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact" className="text-light">
                Contact
              </Nav.Link>
              <NavLink className="nav-link text-light" to="/cart">
                <FaCartPlus /> Cart ({totalUniqueItems})
              </NavLink>
            </Nav>
            <Form className="d-flex me-2">
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="me-2"
                aria-label="Search"
                style={{
                  borderRadius: "20px",
                }}
                value={searchTerm}
                onChange={handleSearch}
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Optionally display the filtered products */}
    </>
  );
};

export default Header;
