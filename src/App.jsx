import { ThemeProvider } from "styled-components";
import { Route } from "wouter";
import { MainPage } from "./pages/MainPage";
import { SearchPage } from "./pages/SearchPage";
import { GlobalStyle } from "./styles/Global";
import styleProps from "./styles/styleProps.json";
import { GifPage } from "./pages/GifPage";
import { useTheme } from "./context/themeContext";
import { RecentSearchsContextProvider } from "./context/recentSearchsContext";

function App() {
    const { theme } = useTheme();
    return (
        <>
            <RecentSearchsContextProvider>
                <ThemeProvider theme={styleProps[theme]}>
                    <GlobalStyle />
                    <Route path="/" component={MainPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/search/:search">
                        {(params) => <SearchPage query={params.search} />}
                    </Route>
                    <Route path="/gif/:id">
                        {(params) => <GifPage id={params.id} />}
                    </Route>
                </ThemeProvider>
            </RecentSearchsContextProvider>
        </>
    );
}

export default App;
