import styled from "styled-components";

const Navbar = styled.nav`
  width: 100%;
  background-color: #2f6dff;
  color: white;
  padding: 24px;
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #f2f2f2;
  color: #4a4a4a;
  padding: 36px 24px;
  text-align: center;
  font-size: 14px;
`;

const Main = styled.main`
  padding: 20px;
  height: 100vh;
`;

const PageWrapper = ({ children, title = "" }) => {
  return (
    <>
      <Navbar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
        <h2>T2 Lifestyle Checker</h2>
      </Navbar>
      <Main>
        <h1>{title}</h1>
        <section>{children}</section>
      </Main>
      <Footer>
        <p className="text-[#4a4a4a]">© 2025. All rights reserved.</p>
        <p className="text-[#4a4a4a]">Work created by Shiraz</p>
      </Footer>
    </>
  );
};

export default PageWrapper;
