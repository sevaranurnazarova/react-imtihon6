import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Label, Textarea  } from "flowbite-react";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:600,
    bgcolor: 'background.paper',
    border: '1px solid #3a86ff',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };
 
const Navbar = () => {
    let navg=useNavigate()
    let [age, setAge] = useState('');
    let [alertOk, setAlertOk]= useState(false);

    let [values,setValues]=useState<{title:string,price:string,category:string,description:string,image:string}>(
      { 
        title: '',
        price: '',
        category: age,
        description: '',
        image:''
      })

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let add_newProduct = async() => {
    console.log(values);
    
    if (values.category !=='' && values.title!=='' && values.description!=='' && values.price!=='')  {
      axios.post('https://663bb05ffee6744a6ea295d0.mockapi.io/prod',values,{
      headers: {
        'Content-Type': 'application/json'
      }
    })  .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        setAlertOk(true)
        setOpen(false)
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    // setAlertOk(true)
    // console.log('salom');
    }
    
    
    
  }

  return (
   <nav className='fixed top-0 left-0 w-full z-50'>
     <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu
                  navg('/') 
                }}>
                  <Typography textAlign="center">All Products</Typography>
                </MenuItem>
                <MenuItem  onClick={()=>{
                  handleChange
                  handleOpen()
                }}>
                  <Typography textAlign="center">Add Products</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button 
                
                onClick={()=>
                  // handleCloseNavMenu()
                  navg('/')
 
                }
                sx={{ my: 2, color: 'white', display: 'block' }}>
                   CLIENT
              </Button>
              <Button 
                
                onClick={()=>
                  // handleCloseNavMenu()
                  navg('/all')
 
                }
                sx={{ my: 2, color: 'white', display: 'block' }}>
                    All PRODUCT
              </Button>
              <Button 
              
              onClick={handleOpen}
              sx={{ my: 2, color: 'white', display: 'block',backgroundColor:'green' }}>
                  ADD NEW PRODUCT
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
                <MenuItem  onClick={()=>{
                  handleCloseUserMenu
                  navg('/profile')
                }}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
              
              {/* Add product */}

              <form className='w-full flex flex-col gap-y-5'>
                    <Typography><span className='text-green-500'>New</span> Product</Typography>
                    <Input value={values.title}
                     onChange={(e)=>setValues({title:e.target.value,price:values.price,category:values.category,description:values.description,image:values.image})} sx={{outline:'none',borderRadius:'10px'}} className='w-full rounded-xl' placeholder='Product Name'></Input>
                    <Input value={values.price}
                     onChange={(e)=>setValues({title:values.title,price:e.target.value,category:values.category,description:values.description,image:values.image})} sx={{outline:'none',borderRadius:'10px'}} className='w-full' type='number' placeholder='Product Price'></Input>
                    <InputLabel id="demo-select-small-label">Category</InputLabel>
                    <Select 
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={values.category}
                        label="Category"
                        onChange={(e)=>setValues({title:values.title,price:values.price,category:e.target.value,description:values.description,image:values.image})}
                    >
                       <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
                                    <MenuItem value={"jewelery"}>jewelery</MenuItem>
                                    <MenuItem value={"electronics"}>electronics</MenuItem>
                                    <MenuItem value={"women's clothing"}>women's clothing</MenuItem>
                    </Select>
                    <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Description" />
                    </div>
                    <Textarea 
                    onChange={(e)=>setValues({title:values.title,price:values.price,category:values.category,description:e.target.value,image:values.image})} id="comment" placeholder="Leave a comment..." required rows={4} />
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="file-upload" value="Product Img" />
                    </div>
                        <input value={values.image} className='w-full rounded-xl' onChange={(e)=>setValues({title:values.title,price:values.price,category:values.category,description:values.description,image:e.target.value})} placeholder='Image URL' type="text" />
                    </div>
                    <Button onClick={()=>add_newProduct()} variant="outlined">Add Product</Button>
              </form>


        </Box>
      </Modal>
      
      <Alert 
      sx={alertOk?{height:100,display:'flex',alignItems:'center'}:{display:'none'}} icon={<CheckIcon fontSize="inherit" />} severity="success">
      Malumotlar Muvofaqqiyaqli yuklandi [status 200]
      <button onClick={()=>setAlertOk(false)} className='ml-[20px]'><CloseIcon/></button>
    </Alert>

   </nav>
  )
}

export default Navbar
