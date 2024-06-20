// import React from 'react'
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"; 

// interface PaginationProps {

// }

// const pagination: React.FC<{ totalPages: number }> = ({ totalPages }) => {
//   return (
//     <Pagination>
//       <PaginationContent>
//         <PaginationItem>
//           <PaginationPrevious className='border-2 border-orange-700 hover:bg-orange-700 hover:text-white' onClick={() => handlePageClick(currentPage - 1)} isActive={currentPage === 1} />
//         </PaginationItem>
//         {[...Array(totalPages)].map((_, index) => (
//           <PaginationItem key={index}>
//             <PaginationLink className='text-white hover:bg-orange-700' href="#" onClick={() => handlePageClick(index + 1)}>{index + 1}</PaginationLink>
//           </PaginationItem>
//         ))}
//         <PaginationItem>
//           <PaginationEllipsis className='text-white'/>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationNext className='border-2 border-orange-700 hover:bg-orange-700 hover:text-white' onClick={() => handlePageClick(currentPage + 1)} isActive={currentPage === totalPages} />
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>
//   )
// }

// export default pagination
