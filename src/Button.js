function Button (props)
{
    const ninja = props.disabledShadow ? 'noShadow' : '' ;
    const styling = `${props.variant} ${props.size} ${ninja} ${props.color} && ${props.endIcon || props.startIcon ? 'icon' : ''}`;
    let names = props.endIcon !== '' ? 'endIcon' : props.startIcon !== '' ? 'startIcon' : props.color === '' || props.color === 'default' ? 'Default':  props.color === 'primary'? 'Primary' : props.color === 'secondary' ? 'Secondary' :'Danger';
    return (
        <button disabled={props.disabled} className={styling}><span className='material-icons'>{props.startIcon}</span><span>{names}</span><span className='material-icons'>{props.endIcon}</span></button>
    )
}

Button.defaultProps = {
    variant: '',
    size: '',
    color:'',
    disabled: false,
    disabledShadow: false,
    startIcon: '',
    endIcon: ''
}

export default Button;