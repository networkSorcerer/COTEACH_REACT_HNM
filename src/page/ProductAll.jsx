import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/networkSorcerer/COTEACH_REACT/products?q=${searchQuery}`; // 기본 URL

    if (searchQuery) {
      // 상품 이름(name) 필드를 기준으로 검색한다고 가정
      // 'name_like'는 SQL의 'LIKE'와 비슷한 역할을 합니다.
      url += `?title_like=${searchQuery}`;
    }

    // 만약 검색할 필드가 'title'이라면:
    // url += `?title_like=${searchQuery}`;

    // 만약 전체 텍스트 검색을 고수한다면: (현재 코드와 동일)
    // url += `?q=${searchQuery}`;

    console.log("요청 URL:", url);
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
