import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { Search, LocationOn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#2196f3',
  },
  title: {
    flexGrow: 1,
  },
  search: {
    width: '400px',
    marginRight: '10px',
  },
  location: {
    width: '200px',
  },
  select: {
    width: '200px',
  },
  list: {
    width: '600px',
    margin: 'auto',
  },
}));

export default function Home() {
  const classes = useStyles();
  // const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`/api/jobs?keyword=<span class="math-inline">\{keyword\}&location\=</span>{location}`);
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, [keyword, location]);

  const handleSearch = () => {
    router.push(`/jobs?keyword=<span class="math-inline">\{keyword\}&location\=</span>{location}`);
  };

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className={classes.root}>
      
        
      
      <div style={{ padding: '20px' }}>
        <TextField
          className={classes.search}
          label="คำที่ต้องการค้นหา"
          variant="outlined"
          value={keyword}
          onChange={handleChangeKeyword}
          InputAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
        />
        
        <TextField
          className={classes.location}
          label="สถานที่"
          variant="outlined"
          value={location}
          onChange={handleChangeLocation}
          InputAdornment={
            <InputAdornment position="end">
              <LocationOn />
              
            </InputAdornment>
          }
          
        />
        
        <Select
          className={classes.select}
         
          variant="outlined"
          value={location}
          onChange={handleChangeLocation}
        >
          <MenuItem value="">ทั้งหมด</MenuItem>
          <MenuItem value="กรุงเทพมหานคร">กรุงเทพมหานคร</MenuItem>
          <MenuItem value="เชียงใหม่">เชียงใหม่</MenuItem>
          <MenuItem value="ภูเก็ต">ภูเก็ต</MenuItem>
          <MenuItem value="โคราช">โคราช</MenuItem>
          <MenuItem value="ขอนแก่น">ขอนแก่น</MenuItem>
          
        </Select>
        <Button variant="contained" color="orange" onClick={handleSearch}>
          ค้นหา
        </Button>
        <List className={classes.list}>
          {jobs.map((job) => (
            <React.Fragment key={job.id}>
              <ListItem>
                <ListItemText primary={job.title} secondary={job.company} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </div>
    </div>
  );
          }