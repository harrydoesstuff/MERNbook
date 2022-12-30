import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme()
    const dark = palette.neutral.dark
    const main = palette.neutral.main
    const medium = palette.neutral.medium

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Poop of the month
                </Typography>
                <Typography color={main}>December 2022</Typography>
            </FlexBetween>
            <img 
                width="100%"
                height="auto"
                alt="poopmonth"
                src="http://localhost:3001/assets/info4.jpeg"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>Poopr:<br /> PoopDoodle</Typography>
                
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                This is PoopDoodle's 5th Poop of the month. Amazing work PoopDoodle! 
                <br />
                <br />
                P.S. Please update us on your test results from the proctologist. Thoughts and prayers xx
            </Typography>
        </WidgetWrapper>
    )
}

export default AdvertWidget