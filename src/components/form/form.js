import { TextField } from '@mui/material';
import React from 'react';

export default class Form extends React.Component
{
    render()
    {
        return(
            <div textField={this.props.field} >
                <form>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>
            </div>
        );
    }
}