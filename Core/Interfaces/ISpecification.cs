using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Core.Interfaces
{
    public interface ISpecification<T>
    {
        /// <summary>
        /// Represents a filtering rule for type <typeparamref name="T"/>.
        /// 
        /// - This is a READ-ONLY property (getter only), not a method.
        /// - It returns an Expression tree, not compiled code.
        /// - Expression<Func<T, bool>> allows EF Core to analyze the lambda
        ///   and translate it into SQL instead of executing it in memory.
        /// - Func<T, bool> defines the shape of the filter (true/false decision).
        /// - Used by repositories to apply database-level filtering
        ///   while keeping query logic reusable and maintainable.
        /// </summary>
        Expression<Func<T, bool>>? Criteria { get; } // this is the property 
        Expression<Func<T, object>>? OrderBy { get; } // this is the property 
        Expression<Func<T, object>>? OrderByDesc { get; } // this is the property 
        bool IsDistinct {  get; }

    }
    public interface ISpecification<T, TResult> : ISpecification<T>
    {
        Expression<Func<T, TResult>>? Select { get; }
    }

}
