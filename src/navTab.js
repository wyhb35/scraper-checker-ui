import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function LinkTab(props, { navigate }) {
    return (
        <Tab
        component="a"
        onClick={() => navigate(props.href)}
        {...props}
        />
    );
}

export default function NavTabs({tabMap},{navigate}) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                    {tabMap.map(item => 
                        <LinkTab label={item.name} href={item.href} key={item.name} navigate={navigate} />
                    )}
                </Tabs>
            </Box>
        </div>

    );
}
