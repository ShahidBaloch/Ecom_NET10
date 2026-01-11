using Core.Entities;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T:  BaseEntity
    {
        Task<T?> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task<T?> GetEntityWithSpec(ISpecification<T> spec);
        Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
        Task<TResult?> GetEntityWithSpec<TResult>(ISpecification<T,TResult> spec);
        Task<IReadOnlyList<TResult>> ListAsync<TResult>(ISpecification<T, TResult> spec); // here after the method ListAsync we mention TResult while in parenthesis weh have t and tresult
        void Add(T enttiy);
        void Update(T entity);
        void Remove(T entity);
        Task<bool> SaveAllAsync();
        bool Exists(int id);
    }
}
