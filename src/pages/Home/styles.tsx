import styled from 'styled-components/native';
export const Container = styled.View`
     flex:1;
     background-color:#282a36;
`;
export const Header = styled.View`
     justify-content:center;
     align-items:center;
     flex-direction:row;
     margin-top:50px;
     height:35px;
     width:150px;
     background:rgba(255,255,255,0.1);
     margin-left:10px;
     border-radius:15px;
     
`;
export const HeaderText = styled.Text`
    font-weight:bold;
    font-size:20px;
    color:#fff;
`;

export const Body = styled.View`
     flex:1;
     margin-left:10px; 
     flex-direction:row;
     justify-content:space-around;
     align-items:center;
`;
export const BodyText = styled.Text`
    font-weight:bold;
    font-size:20px;
    color:#1fcb70;
`;
export const Imagem = styled.Image`
     width:100px;
     height:100px;
`;
export const BodyHeader = styled.View``;
export const Footer = styled.View`
     height:400px;
     border-top-left-radius:50px;
     border-top-right-radius:50px;
     background-color:#343746;
     justify-content:center;
     align-items:center;
`;
export const FooterHeader = styled.View`
padding:30px;`
export const FooterTextBold = styled.Text`
   font-weight:bold;
   font-size:30px;
   color:#6272a4;
`;
export const FooterText = styled.Text`
   font-size:16px;
   color:#6272a4;
 `;


export const Button = styled.TouchableOpacity`
   width:300px;
   height:60px;
   margin-top:10px;
   flex-direction:row;
   align-items:center;
   justify-content:space-between;
   border-radius:10px;
   background-color: #282a36;
   padding:20px;
   
`;

export const ButtonText = styled.Text`
    font-weight:bold;
    font-size:20px;
    color:#fff;
    margin-left:15px;
   
   
`;

export const ButtonHeader = styled.View`
flex-direction:row
`;

