interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]>{
    // .. 
}

// 중복 코드 발생
// interface ProductDetail{
//     id: number;
//     name: string;
//     price: number;
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
}

//위의 Product 코드와 중복 발생
// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>;
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>){

}

// 4. 유틸리티 타입 구현하기 - Partial 
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl : string;
}

// #1 UserProfile 별칭을 이용
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2 Partical 쓴 것과 같은 효과가 남
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

type UserProfileKeys = keyof UserProfile

// #3 keyof 이용
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4 제너릭 이용 > Partial 형태로 됨
type Subset<T> = {
    [p in keyof T]?: T[p]
}
