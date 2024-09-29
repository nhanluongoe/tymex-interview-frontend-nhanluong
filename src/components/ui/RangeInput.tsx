import { Slider, SliderProps, styled } from '@mui/material'

const CustomizedSlider = styled(Slider)(({ theme }) => ({
    textTransform: 'none',
    color: theme.palette.primary.main,
    '& .MuiSlider-thumb': {
        color: theme.palette.primary.main,
    },
    '& .MuiSlider-track': {
        color: theme.palette.primary.main,
        height: '20%',
    },
    '& .MuiSlider-rail': {
        color: '#3A3841',
        height: '25%',
    },
    '& .MuiSlider-markLabel': {
        color: '#D6D6D6',
    },
    '& .MuiSlider-valueLabel': {
        backgroundColor: theme.palette.primary.main,
    },
}))

export default function RangeInput(props: SliderProps) {
    return <CustomizedSlider {...props} />
}
