import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
function App(){
  let handleClick = () => {
    console.log("Button Clicked");
  }
  return(
    <>
    <h1>Material UI Demo</h1>
    <Button variant="contained" 
    color="error"
    size="small"
    onClick={handleClick}>click Me !</Button>
    <Button variant="contained" 
    color="success"
    size="small"
    startIcon={<DeleteIcon />}
    onClick={handleClick}>Delete Me !</Button>
    <Button variant="contained" 
    color="error"
    size="small"
    endIcon={<SendIcon />}
    onClick={handleClick}>send Me !</Button>
    </>
  );
}
export default App;