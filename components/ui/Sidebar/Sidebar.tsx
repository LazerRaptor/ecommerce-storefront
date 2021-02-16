import React, { useContext, Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";
import { LayoutContext } from "../../../lib/contexts/layoutContext";
import Skeleton from "../Skeleton";
import { MdClose } from "react-icons/md";
import { useCategory } from "../../../lib/hooks/useCategory";

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 18rem;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  padding: 1.5rem;
  z-index: 99;
  transition: transform 0.2s ease-out;
  transform: translate(${(props) => (props.show ? "0%" : "-100%")}, 0%);
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 9px;
  top: 9px;
  cursor: pointer;
`;

const List = styled.ul``;

const ListItem = styled.li`
  text-decoration: none;
  margin: ${(props) => (props.nested ? ".5em" : "1em")} 0;
`;

const Anchor = styled.a`
  text-decoration: ${(props) => (props.nested ? "none" : "underline")};
  color: ${(props) => (props.nested ? "hsl(0, 0%, 42%)" : "black")};
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const Title = styled.h1`
  font-size: 1.4em;
  margin: 1.5em 0;
`;

const CategoryList = ({ categories, nested = false }) => {
  return categories ? (
    <List>
      {categories.map((category) => (
        <ListItem nested={nested} key={category.id}>
          <Link
            href={{
              pathname: "/categories/[slug]",
              query: { slug: category.slug },
            }}
          >
            <Anchor nested={nested}>{category.title}</Anchor>
          </Link>
          {category.children.length > 0 ? (
            <CategoryList categories={category.children} nested={true} />
          ) : null}
        </ListItem>
      ))}
    </List>
  ) : null;
};

const Sidebar = () => {
  let { categories, isLoading } = useCategory("tree");
  const { sidebar, setSidebar } = useContext(LayoutContext);
  let categoryView = isLoading ? (
    <Skeleton />
  ) : (
    <CategoryList categories={categories} />
  );
  return (
    <Aside show={sidebar}>
      <CloseIcon>
        <MdClose onClick={() => setSidebar(false)} size="1.5em" />
      </CloseIcon>
      <Title>Browse Categories</Title>
      {categoryView}
    </Aside>
  );
};

export default Sidebar;