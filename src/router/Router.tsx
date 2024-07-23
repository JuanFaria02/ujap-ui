import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import BodyWrapper from "./components/BodyWrapper/BodyWrapper"

const Router = () => (
    <BrowserRouter>
        <Routes>
          <Route element = {<Layout/>} path={"/"}>
                <Route
                    index
                    element={
                    <BodyWrapper>

                    </BodyWrapper>
                    }
                />
            </Route> 
            <Route element = {<Layout/>} path={"/form"}>
                <Route
                    index
                    element={
                    <BodyWrapper>
                    </BodyWrapper>
                    }
                />
            </Route> 
        </Routes>
    </BrowserRouter>
)

export default Router