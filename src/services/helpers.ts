export const getClass = (obj:any) => {
   let classname = '';

   for(const [key, value] of Object.entries(obj)){
      if (value) classname += " " + key;
   }

   return classname
}