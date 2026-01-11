using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Core.Specifications
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        private readonly Expression<Func<T, bool>>? _criteria;
        public BaseSpecification(Expression<Func<T, bool>>? criteria)
        {
            _criteria = criteria;
        }
        /// <summary>
        /// Initializes a new instance of <see cref="BaseSpecification{T}"/> without any filtering criteria.
        /// 
        /// This constructor uses constructor chaining via <c>this(null)</c> to call the main constructor
        /// of the same class, ensuring that all initialization logic remains in one place.
        /// 
        /// Note:
        /// - <c>this(null)</c> is NOT inheritance.
        /// - It simply invokes another constructor of the same class.
        /// - This avoids code duplication and keeps the class initialization consistent.
        /// </summary>
        public BaseSpecification() : this(null) { }

        /// <summary>
        /// Base implementation of the Specification pattern.
        /// 
        /// - Encapsulates filtering logic using Expression<Func<T, bool>>.
        /// - Stores the criteria as a read-only expression to ensure immutability.
        /// - Expression trees allow EF Core to translate the filter into SQL,
        ///   ensuring database-level execution instead of in-memory filtering.
        /// - Acts as a reusable foundation for creating concrete specifications
        ///   while keeping repositories clean and focused on data access.
        /// </summary>
        public Expression<Func<T, bool>>? Criteria => _criteria;

        public Expression<Func<T, object>>? OrderBy { get; private set; }

        public Expression<Func<T, object>>? OrderByDesc { get; private set; }

        public bool IsDistinct { get; private set; }

        protected void AddOrderBy(Expression<Func<T, object>> orderByExpression)
        {
            OrderBy = orderByExpression;
        }

        protected void AddOrderByDesc(Expression<Func<T, object>> orderByDescExpression)
        {
            OrderByDesc = orderByDescExpression;
        }

        protected void ApplyDistinct()
        {
           IsDistinct = true;
        }


    }

    public class BaseSpecification<T, TResult> : BaseSpecification<T>, ISpecification<T, TResult>
    {
        protected BaseSpecification() : this(null!) { }
        public Expression<Func<T, TResult>>? Select { get; private set; }

        public BaseSpecification(Expression<Func<T, bool>> criteria)
            : base(criteria)
        {
        }

        protected void AddSelect(Expression<Func<T,TResult>> selectExpression)
        {
            Select = selectExpression;
        }

    }
}
