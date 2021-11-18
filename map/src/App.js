import './App.css';
import {Container} from "@mui/material";
import Finder from "./components/Finder";
import MapBlock from "./components/MapBlock";
import {useSelector} from "react-redux";
import Spinner from "./components/Spinner";

function App() {
    const {status} = useSelector(state => state.formFilter)
    return (
        <Container maxWidth="xl" sx={{display: "flex", p: 0}} id="Container">
            <Finder/>
            {
                status === "loading" ?
                    <Spinner/> :
                    <MapBlock/>
            }
        </Container>
    );
}

export default App;