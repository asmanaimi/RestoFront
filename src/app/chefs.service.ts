import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {
  chefsUrl="http://localhost:8086/chefs"

  constructor(private chefService: HttpClient) { }
  
  getAllChefs(){
    return this.chefService.get<{data:any}>(this.chefsUrl)
      }
     
      addChef(chef:any) {
        return this.chefService.post<{data:any}>(this.chefsUrl,chef)
    
      }
      getChefById(id:number) {
        return this.chefService.get<{data:any}>(`${this.chefsUrl}/${id}`)
    
      }
     
      updateChef(chef:any) {
        return this.chefService.put<{data:any}>(`${this.chefsUrl}`,chef)
      }
      deleteChef(id:number) {
        
        return this.chefService.delete<{data:any}>(`${this.chefsUrl}/${id}`)
    
      }
    
    
}
