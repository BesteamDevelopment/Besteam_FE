import React from "react";
import { Container } from "../general/general";
import {
  ButtonIscrizione,
  FormIscrizione,
  InputIscrizione,
  TestoIscrizione,
  TestoPiccolo,
} from "./IscrizioneStyled";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
interface CheckboxProps {
  classes: {
    root: string;
    label: string;
  };
}
import PC from '../media/pc.png'
import PS from '../media/ps.png'
import Xbox from '../media/xbx.png'
import { Checkbox, FormControlLabel } from "@mui/material";
import {makeStyles} from '@material-ui/core/styles'
import SelectBoxCustom from "./selectBox/SelectBoxCustom";
import { country_list } from "../utilis/utils";
const useStyles  =makeStyles({
  checkbox: {
    color: 'green', // Change the color of the checkbox
    borderRadius:'100px',
    '&.Mui-checked': {
      color: '#0f0', // Change the color of the checked checkbox
    },
    "& .MuiSvgIcon-root": {
      fontSize: 30,
      borderRadius: '50%',
    }
  },

  label: {
    fontSize: 16, // Change the font size of the label
    fontWeight: 'bold', // Change the font weight of the label
  },
});
const Iscrizione = () => {
  const [firstForm, setFirstForm]=React.useState(true)
  const [secondForm, setSecondForm]=React.useState(false)
  const [thirdForm, setThirdForm] = React.useState(false)
  const classes = useStyles();
  return (
    <Container>
      {firstForm &&
      <FormIscrizione>
        <div>
          <TestoIscrizione>NICKNAME*</TestoIscrizione>
          <InputIscrizione />
        </div>
        <div>
          <TestoIscrizione>EMAIL*</TestoIscrizione>
          <InputIscrizione />
        </div>
        <div>
          <TestoIscrizione>WALLET*</TestoIscrizione>

          <InputIscrizione />
        </div>
        <div>
          <TestoIscrizione>DISCORD*</TestoIscrizione>

          <InputIscrizione />
        </div>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignContent:'flex-start'}}>
        <FormControlLabel
          control={<Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleChecked />} classes={{ root: classes.checkbox }} />}
          label="I accept the Terms and conditions and Privacy Policy." // Add your label here
        />
        <FormControlLabel
          control={<Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleChecked />} classes={{ root: classes.checkbox }} />}
          label="I agree to subscribe to Besteam newsletter." // Add your label here
        />
        </div>
        <ButtonIscrizione onClick={()=>{setFirstForm(false), setSecondForm(true)}}>NEXT</ButtonIscrizione>
        <TestoPiccolo>*MADANTORY FIELD </TestoPiccolo>
      

      </FormIscrizione>
}
      {secondForm &&  <FormIscrizione>
        <div>
          <TestoIscrizione>NATIONALITY*</TestoIscrizione>
          <SelectBoxCustom list={country_list}/>
        </div>
        <div>
          <TestoIscrizione>Where are you playing from?*</TestoIscrizione>
          <SelectBoxCustom list={country_list}/>
        </div>
        <div>
          <TestoIscrizione>PLATFORM ACCOUNT</TestoIscrizione>

          <InputIscrizione />
        </div>
        <div>
          <TestoIscrizione>PLATFORM*</TestoIscrizione>

          <div>
            <img src={PS} />
            <img src={PC} />
            <img src={Xbox} />


          </div>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'3rem'}}>
          <div>
          <TestoIscrizione>First Role?</TestoIscrizione>
          <SelectBoxCustom list={country_list}></SelectBoxCustom>
          </div>
          <div>
            <TestoIscrizione>Second Role?</TestoIscrizione>
            <SelectBoxCustom list={country_list}></SelectBoxCustom>

          </div>
        </div>
        
        <ButtonIscrizione onClick={()=>{setSecondForm(false), setThirdForm(true)}}>SEND</ButtonIscrizione>
        <TestoPiccolo>*MADANTORY FIELD </TestoPiccolo>
      

      </FormIscrizione>
}
    </Container>
  );
};

export default Iscrizione;
