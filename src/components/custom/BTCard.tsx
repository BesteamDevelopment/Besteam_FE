import { Box, Card, CardContent, Typography } from "@mui/material";
import { BTCardProps } from "../../types/customComponentsTypes/BTCard";

const BTCard = ({footerTitle, subtitle, title}:BTCardProps) => {

  return (
    <Card style={{
        color: 'white',
        width: "23,2rem",
        aspectRatio: 1/1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#0A3013',
        borderRadius: 30,
        padding: "2px 17px 18px 17px"
    }}>
      <CardContent>
        <Typography style={{
             textOverflow: 'ellipsis',
             whiteSpace: 'nowrap',
             fontFamily: 'DINPro',
             fontSize: '2rem',
             fontStyle: 'normal',
             fontWeight: 700,
        }}>
          {title}
        </Typography>
        <Typography style={{
            overflow: 'hidden',
            color: '#FFF',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: 'DINPro',
            fontSize: '0,9rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
        }}>
          {subtitle}
        </Typography>
      </CardContent>
      <Box px={2} pb={2}>
        <Typography style={{
            overflow: 'hidden',
            color: '#FFF',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: 'DINPro',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
        }}>
          {footerTitle}
        </Typography>
      </Box>
    </Card>
  )
}

export default BTCard;