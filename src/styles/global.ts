import { createGlobalStyle, withTheme } from "styled-components";
import { ThemeProps } from "./theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const GlobalStyles = createGlobalStyle`
:root {
  --main-font: "League Spartan", sans-serif;
}
* {
  margin: 0;
  padding: 0;
}
body {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  box-sizing: border-box;
  font-family: var(--main-font);
}
body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

image {
  display: block;
}
ul,
ol,
li {
  padding: 0;
  margin: 0;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  width: 538px;
  margin: 0 auto;
  margin-top: 5.5rem;
  padding: 1rem 0;
  align-items: center;
}
.themes {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: flex-end;
}
.themes p {
  font-size: 0.75rem;
  letter-spacing: 1px;
}
.theme-toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-weight: 0.9rem;
}
.theme-number,
.theme-value {
  display: flex;
  flex-direction: row;
}
.theme-number {
  gap: 0.9rem;
}
.theme-value {
  gap: 2px;
}
.theme-value {
  border-radius: 15px;
  padding: 5px 4px;
  width: 60px;
  max-width: 100%;
}
.theme-btn.active {
  background-color: hsl(6, 63%, 50%);
}
.theme-numbers {
  display: flex;
  flex-direction: column;
}

.calculator {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  width: 538px;
  margin-bottom: 5rem;
}
.calculator * {
  transition: background-color 1s, color 0.1s ease-in-out;
}

.calculator button {
  border: none;
  font-size: 32px;
  font-weight: 700;
  cursor: pointer;
}

.screen {
  font-size: 3.3rem;
  padding: 2.5rem 1.9rem;
  text-align: right;
  height: 2.9rem;
  letter-spacing: 1px;
  border-radius: 5px;
  margin-top: 0.9rem;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.keypad {
  display: grid;
  row-gap: 1.9rem;
  column-gap: 1.3rem;
  grid-template: repeat(5, 1fr) / repeat(4, 1fr);
  grid-auto-flow: row;
  padding: 2rem;
  border-radius: 5px;
  margin-top: 1.6rem;
}
.keypad button {
  border-radius: 10px;
}
.key,
.operator {
  padding: 0.8rem 0 0.5rem 0;
  text-align: center;
  border-radius: 10px;
}
#del,
#reset-key,
#equals-key {
  font-size: 1.5rem;
}
#reset-key {
  grid-column: 1 / span 2;
}
#equals-key {
  grid-column: 3 / span 2;
}

@media screen and (max-width: 600px) {
  header,
  .calculator {
    width: 90%;
  }
}
@media screen and (max-width: 440px) {
  .keypad {
    padding: 1rem;
  }
}

body {
  background-color: ${({ theme }: GlobalThemeProps) => theme.colors.background};
  color: ${({ theme }: GlobalThemeProps) => theme.colors.headerText};
}
header {
  color: ${({ theme }: GlobalThemeProps) => theme.colors.headerText};
}
.keypad {
  background-color:  ${({ theme }: GlobalThemeProps) => theme.colors.keypad};
}
.key, .operator {
  border-radius: 5px;
  background-color: ${({ theme }: GlobalThemeProps) => theme.colors.key};
  box-shadow: 0 4px 0 0 ${({ theme }: GlobalThemeProps) => theme.colors.keyShadow};
  color: ${({ theme }: GlobalThemeProps) => theme.colors.keyText};
  &:hover {
    background-color: ${({ theme }: GlobalThemeProps) => theme.colors.numberKeyHover};
  }
}
.screen {
  border-radius: 5px;
  background-color: ${({ theme }: GlobalThemeProps) => theme.colors.screen};
  color: ${({ theme }: GlobalThemeProps) => theme.colors.screenText};
}
.del, .reset {
  border-radius: 5px;
  background-color: ${({ theme }: GlobalThemeProps) => theme.colors.actionKey};
  box-shadow: 0 4px 0 0 ${({ theme }: GlobalThemeProps) => theme.colors.actionKeyShadow};
  color: ${({ theme }: GlobalThemeProps) => theme.colors.actionKeyText};
  &:hover {
    background-color: ${({ theme }: GlobalThemeProps) => theme.colors.actionKeyHover};
  }
}
.equals-key {
  border-radius: 5px;
  background-color: ${({ theme }: GlobalThemeProps) => theme.colors.equalsKey};
  box-shadow: 0 4px 0 0 ${({ theme }: GlobalThemeProps) => theme.colors.equalsKeyShadow};
  color: ${({ theme }: GlobalThemeProps) => theme.colors.equalsKeyText};
  &:hover {
    background-color: ${({ theme }: GlobalThemeProps) => theme.colors.equalKeyHover};
  }
}
.theme-value {
  background-color:  ${({ theme }: GlobalThemeProps) => theme.colors.keypad};
}
.theme-btn.active 
{
  background-color: ${({ theme }: GlobalThemeProps) => theme.colors.equalsKey};
  &:hover {
    background-color: ${({ theme }: GlobalThemeProps) => theme.colors.equalKeyHover};
  }
}
`;
export default withTheme(GlobalStyles);
