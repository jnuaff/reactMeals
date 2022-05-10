import "./App.css";
import { ItemsProvider } from "./components/store/ItemsContext";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme";
import Navbar from "./components/Layout/Navbar";
import AvailableItems from "./components/Items/AvailableItems";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ItemsSummary from "./components/Items/ItemsSummary";
import { useState } from "react";
import CartContent from './components/Cart/CartContent';

const style = {
  position: 'absolute',
  top: '50%',
  borderRadius:"14px",
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <ItemsProvider>
        <ThemeProvider theme={customTheme}>
          <Navbar onHandleToggle={handleToggle} />
          <ItemsSummary />
          <AvailableItems />
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <CartContent />
              </Box>
            </Fade>
          </Modal>
          
        </ThemeProvider>
    </ItemsProvider>
  );
}
export default App;
