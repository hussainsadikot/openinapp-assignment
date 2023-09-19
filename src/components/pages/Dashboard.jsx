import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardStatsGrid from '../dashboardcharts/DashboardStatsGrid'
import Activities from '../dashboardcharts/Activities'
import TopProducts from '../dashboardcharts/TopProducts'
import { IoIosAddCircle } from 'react-icons/io'
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField, Tab, Tabs, Box } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import { AiOutlineClose } from "react-icons/ai"
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useContextHook } from '../../provider/ContextProvider'
import '../../assets/envelope.svg'
import '../../assets/insta.svg'
import '../../assets/whatsapp.svg'
import '../../assets/youtube.svg'
import { BsWhatsapp, BsInstagram, BsEnvelope, BsYoutube, } from 'react-icons/bs'


const Dashboard = () => {
  const [open, openchange] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [toggleButtons, setToggleButton] = useState(true);
  const [toggleProfile, setToggleProfile] = useState(true);
  //Form Related usestates
  // const [basicFormData, setBasicFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",

  // })
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    insta: "",
    youtube: "",
  })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [insta, setInsta] = useState('')
  const [youtube, setYoutube] = useState('')

  // const [basicFormRecord, setBasicFormRacord] = useState()
  const [formRecord, setFormRecord] = useState()


  const functionopenpopup = () => {
    openchange(true);
  }
  const closepopup = () => {
    openchange(false);
  }

  //tabs

  const handleTabs = (event, newValue) => {
    console.warn(newValue)
    setTabValue(newValue);
  };

  // const handleBasicFormSubmit = (e) => {
  //   e.preventDefault()
  //   const newRecordBasicForm =
  //     { ...basicFormData, id: new Date().getTime().toString() };
  //   console.log(newRecordBasicForm)
  //   // setBasicFormRacord([...basicFormRecord, newRecordBasicForm])
  // }

  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value)
  //   setBasicFormData({ ...basicFormData, [name]: value })
  // }
  let dataObj = { name: '', email: '', phone: '', insta: '', youtube: '' }
  const handleDoneButton = () => {
    dataObj.name = input.name
    dataObj.email = input.email
    dataObj.phone = input.phone
    dataObj.insta = input.insta
    dataObj.youtube = input.youtube

    setFormRecord(dataObj)
    console.log('done click')
    console.log(dataObj)
    openchange(false)
    setToggleProfile(false)
  }
  function handleTabsById(preValue) {
    //setting tabs
    if (preValue < 1) {

      setTabValue(1)
    }
    else {
      setTabValue(0)
    }
    //set toggle buttons
    if (preValue === 0) {
      setToggleButton(false)

    }
    else if (preValue === 1) {
      setToggleButton(true)
    }

  }




  return (
    <div className='flex gap-4 flex-col'>

      <div>
        <DashboardStatsGrid />
      </div>
      <div><Activities/></div>
      <div className='flex flex-row gap-12'>

        <TopProducts />
        <>
          {toggleProfile ? (

            <div className=' rounded border w-1/2 flex flex-col gap-2 bg-white items-center justify-center '>

              <IoIosAddCircle className="text-9xl text-grey-500  " onClick={functionopenpopup} />

              <div className='flex text-4xl'>
                Add Profile
              </div>

            </div>

          )
            :
            (<div className='rounded border w-1/2 flex flex-col gap-2 bg-white'>
              <div className='font-bold mt-2 ml-4 '>
                {dataObj.name}

              </div>
              <div className='flex justify-center   '>
                <div className='flex-auto overflow-hidden'>
                  <div className='flex  items-center gap-2 m-2 p-2 '>
                    <div >
                    
                        <BsWhatsapp className='fill-bermuda ' />
                      
                    </div>
                    <div className='overflow-hidden '>{formRecord.phone}</div>
                  </div>
                  <div className='flex items-center
                  gap-2 m-2 p-2
                   '>
                    <div>
                      <BsEnvelope className='fill-tahiti ' />
                    </div>
                    <div className='overflow-hidden '>{formRecord.email}</div>
                  </div>
                </div>
                <div className='flex-auto overflow-hidden'>
                  <div className='flex items-center gap-2 m-2 p-2 '>
                    <div>
                      <BsInstagram className='fill-[#da5a5a]' />
                    </div>
                    <div className='overflow-hidden text-midnight '>{formRecord.insta}</div>
                  </div>
                  <div className='flex items-center gap-2 m-2 p-2 '>
                    <div>
                      <BsYoutube className='fill-[#ff4b4b]' />
                    </div>
                    <div className='overflow-hidden '>{formRecord.youtube}</div>
                  </div>
                </div>
              </div>

            </div>

            )
          }
          <div>
            <Dialog

              // fullScreen 
              open={open} onClose={closepopup} >
              <DialogTitle >Add New Profile  <IconButton onClick={closepopup} style={{ float: 'right' }}><AiOutlineClose color="primary"></AiOutlineClose></IconButton>  </DialogTitle>
              <DialogContent>
                <div className='flex flex-col p-2 w-[550px] '>
                  <div className='flex justify-normal p-1'>
                    <Box sx={{ bgcolor: 'background.paper', width: 500 }}  >
                      <Tabs
                        value={tabValue}

                        textColor="inherit"
                        indicatorColor="primary"

                        variant="fullWidth"
                      >
                        <Tab label="Basic"
                          {...a11yProps(0)}
                        />
                        <Tab label="Social"
                          {...a11yProps(1)}
                        />

                      </Tabs>
                    </Box>
                  </div>
                  <TabPanel value={tabValue} index={0}>
                    <div>
                      <form className='flex flex-col justify-start gap-2 ' >
                        <label>Enter Name*</label>
                        <input type='text' value={input.name}
                          onChange={(e) => setInput({ ...input, name: e.target.value })}
                          required placeholder='Eg. John Doe' className=''
                          name='name'></input>

                        <label>Enter Email*</label>
                        <input type='text' value={input.email}
                          onChange={(e) => setInput({ ...input, email: e.target.value })}
                          required placeholder='Eg. John@xyz.com' className=''
                          name='email'></input>


                        <label>Enter Phone*</label>
                        <input type='phone' value={input.phone}
                          onChange={(e) => setInput({ ...input, phone: e.target.value })}
                          required placeholder='Eg. 9123456789' className='' name='phone'></input>
                      </form>

                    </div>


                  </TabPanel>
                  <TabPanel value={tabValue} index={1}>

                    <SocialForm
                      // insta={insta}
                      // youtube={youtube}
                      // setInsta = {setInsta}
                      // setYoutube= {setYoutube}
                      input={input}
                      setInput={setInput}
                    ></SocialForm>
                  </TabPanel>

                  {toggleButtons ?
                    <div className='flex justify-end '>
                      <Button variant="contained" onClick={(e) => handleTabsById(tabValue)}>

                        Next

                      </Button>
                    </div>
                    :
                    <div className=' mt-4 flex items-end gap-2
                      justify-end

                      '>
                      <Button
                        onClick={() => handleTabsById(tabValue)}
                        variant="outlined"
                        style={{
                          border: '2px solid black', borderRadius: '5px',
                          color: 'black',

                        }}
                      >Back</Button>
                      <Button color='primary'
                        variant='contained'
                        onClick={handleDoneButton}
                      >Done</Button>
                    </div>}

                </div>

              </DialogContent>
              <DialogActions>
                {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
              </DialogActions>
            </Dialog>
          </div>
        </>
      </div>
    </div>
  )
}

export default Dashboard

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    // <>
    //   {

    //   value===index && (
    //     <div>

    //       {children}
    //     </div>
    //   )
    //   }
    // </>
  )
}
function BasicForm() {






  return (
    <>
      <div>
        {/* <form className='flex flex-col justify-start gap-2 ' >
          <label>Enter Name*</label>
          <input type='text' value={basicFormData['name']}
            onChange={(e) => setBasicFormData({ ...basicFormData, 'name': e.target.value })}
            required placeholder='Eg. John Doe' className=''
            name='name'></input>

          <label>Enter Email*</label>
          <input type='text' value={basicFormData['email']}
            onChange={(e) => setBasicFormData({ ...basicFormData, 'email': e.target.value })}
            required placeholder='Eg. John@xyz.com' className=''
            name='email'></input>


          <label>Enter Phone*</label>
          <input type='phone' value={basicFormData['phone']}
            onChange={(e) => setBasicFormData({ ...basicFormData, 'phone': e.target.value })}
            required placeholder='Eg. 9123456789' className='' name='phone'></input>
        </form> */}

      </div>
    </>
  )
}
function SocialForm({ input, setInput }) {
  // const [insta,youtube,setInsta,setYoutube] =props
  // const [insta,youtube,setInsta,setYoutube] =props
  return (
    <>
      <div>
        <form className='flex flex-col justify-start gap-2 '>
          <label>Instagram Link</label>
          <input type='text' onChange={(e) => setInput({ ...input, insta: e.target.value })} value={input.insta} placeholder='Eg. Instagrm.com/Username' className=''></input>

          <label>Youtube Link</label>
          <input type='text' onChange={(e) => setInput({ ...input, youtube: e.target.value })} value={input.youtube} placeholder='Eg. YouTube.com/Username' className=''></input>

        </form>
      </div>
    </>
  )
}



function MyTab() {
  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }
  return (

    <div className='d-flex alig-items-center justify-content-center'>
      <div>
        <ul>
          <li className="flex-fill" onClick={() => updateToggle(1)}>Basic Form</li>
          <li className="flex-fill" onClick={() => updateToggle()}>SocialForm</li>
        </ul>
        <div className={toggle === 1 ? "show-content" : "content"}>
          Form-1
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>

          <h1>Form2</h1>
        </div>
      </div>

    </div>
  )
}


function MyDialog() {


  return (
    <>

      {/* <Box sx={{ width: '100%'}}>
                  <Tabs
                    value={tabValue}
                    onChange={handleTabs}
                    textColor="inherit"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                  >
                    <Tab label="Basic" />
                    <Tab label="Social" />
                    <Tab label="Social" />

                  </Tabs>
                </Box>
                  <TabPanel value={tabValue} index={0}>
                  <BasicForm></BasicForm>
                    
                  </TabPanel>
                  <TabPanel value={tabValue} index={1}>
                    
                  <SocialForm></SocialForm>
                  </TabPanel> */}
    </>
  )
}
