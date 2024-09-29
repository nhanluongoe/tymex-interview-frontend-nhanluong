import { SvgIcon, SvgIconProps } from "@mui/material";

export default function PhoneIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.9298 15.3933L15.8765 15.4467C15.0621 16.2558 13.7964 16.3942 12.8265 15.78C10.9572 14.6157 9.37819 13.0401 8.20982 11.1733C7.59565 10.2034 7.73398 8.93766 8.54315 8.12332L8.59648 8.06999C8.76432 7.9018 8.998 7.81655 9.2347 7.83713C9.47141 7.85771 9.68686 7.98203 9.82315 8.17665L10.9132 9.73665C11.1384 10.0548 11.1003 10.4892 10.8232 10.7633L10.7598 10.83C10.559 11.025 10.5176 11.3321 10.6598 11.5733C11.0919 12.2988 11.6994 12.904 12.4265 13.3333C12.6677 13.4755 12.9748 13.4342 13.1698 13.2333L13.2365 13.17C13.5106 12.8929 13.945 12.8548 14.2632 13.08L15.8232 14.17C16.0166 14.3063 16.1401 14.5211 16.1607 14.7569C16.1813 14.9927 16.0968 15.2255 15.9298 15.3933Z"
        fill="white"
      />
    </SvgIcon>
  );
}
